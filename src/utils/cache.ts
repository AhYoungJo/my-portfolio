interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number; // Time To Live (밀리초)
}

class HybridCache {
  private memoryCache = new Map<string, CacheItem<any>>();
  private readonly storageKey = 'app-cache';

  constructor() {
    if (typeof window !== 'undefined') {
      this.loadFromStorage();
    }
  }

  set<T>(key: string, data: T, ttl: number = 5 * 60 * 1000): void {
    const item: CacheItem<T> = {
      data,
      timestamp: Date.now(),
      ttl,
    };

    this.memoryCache.set(key, item);

    if (typeof window !== 'undefined') {
      this.saveToStorage();
    }
  }

  get<T>(key: string): T | null {
    const item = this.memoryCache.get(key);

    if (!item) {
      return null;
    }

    // TTL 체크
    const isExpired = Date.now() - item.timestamp > item.ttl;
    if (isExpired) {
      this.delete(key);
      return null;
    }

    return item.data;
  }

  clear(): void {
    this.memoryCache.clear();
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.storageKey);
    }
  }

  delete(key: string): void {
    this.memoryCache.delete(key);
    if (typeof window !== 'undefined') {
      this.saveToStorage();
    }
  }

  cleanup(): void {
    const now = Date.now();
    let hasChanges = false;

    for (const [key, item] of this.memoryCache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.memoryCache.delete(key);
        hasChanges = true;
      }
    }

    if (hasChanges && typeof window !== 'undefined') {
      this.saveToStorage();
    }
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        this.memoryCache = new Map(Object.entries(parsed));
      }
    } catch (error) {
      console.warn('캐시 로드 실패:', error);
      this.memoryCache.clear();
    }
  }

  private saveToStorage(): void {
    try {
      const cacheObject = Object.fromEntries(this.memoryCache);
      localStorage.setItem(this.storageKey, JSON.stringify(cacheObject));
    } catch (error) {
      console.warn('캐시 저장 실패:', error);
    }
  }
}

// 전역 캐시 인스턴스
export const memoryCache = new HybridCache();

// 캐시 무효화 헬퍼 함수들
export const cacheUtils = {
  invalidate: (key: string) => {
    memoryCache.delete(key);
  },

  invalidateAll: () => {
    memoryCache.clear();
  },

  invalidateGitHub: () => {
    memoryCache.delete('github-user');
    memoryCache.delete('github-repos');
  },

  invalidateCareer: () => {
    memoryCache.delete('career-data');
  },
};

if (typeof window !== 'undefined') {
  setInterval(() => {
    memoryCache.cleanup();
  }, 60000); // 1분마다 정리
}
