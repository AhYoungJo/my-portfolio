const API_BASE_URL = process.env.GITHUB_API_BASE_URL;

interface FrameworkRule {
  name: string;
  indicators: {
    topics?: string[];
    dependencies?: string[];
    devDependencies?: string[];
    files?: string[];
    languageContext?: string[];
  };
  priority: number;
}

const FRAMEWORK_RULES: FrameworkRule[] = [
  {
    name: 'Next.js',
    indicators: {
      topics: ['nextjs', 'next', 'next-js'],
      dependencies: ['next'],
      files: ['next.config.js', 'next.config.ts'],
      languageContext: ['JavaScript', 'TypeScript'],
    },
    priority: 95,
  },
  {
    name: 'React',
    indicators: {
      topics: ['react', 'reactjs'],
      dependencies: ['react', 'react-dom'],
      languageContext: ['JavaScript', 'TypeScript'],
    },
    priority: 90,
  },
  {
    name: 'Vue.js',
    indicators: {
      topics: ['vue', 'vuejs', 'vue3'],
      dependencies: ['vue', '@vue/cli'],
      files: ['vue.config.js'],
      languageContext: ['JavaScript', 'TypeScript'],
    },
    priority: 90,
  },
  {
    name: 'Angular',
    indicators: {
      topics: ['angular', 'angular2'],
      dependencies: ['@angular/core', '@angular/cli'],
      files: ['angular.json'],
      languageContext: ['TypeScript'],
    },
    priority: 90,
  },
  {
    name: 'Svelte',
    indicators: {
      topics: ['svelte', 'sveltekit'],
      dependencies: ['svelte', '@sveltejs/kit'],
      languageContext: ['JavaScript', 'TypeScript'],
    },
    priority: 90,
  },

  {
    name: 'Express',
    indicators: {
      topics: ['express', 'expressjs'],
      dependencies: ['express'],
      languageContext: ['JavaScript', 'TypeScript'],
    },
    priority: 85,
  },
  {
    name: 'Django',
    indicators: {
      topics: ['django'],
      files: ['manage.py', 'settings.py'],
      languageContext: ['Python'],
    },
    priority: 90,
  },
  {
    name: 'Flask',
    indicators: {
      topics: ['flask'],
      dependencies: ['flask'],
      languageContext: ['Python'],
    },
    priority: 85,
  },
  {
    name: 'Spring Boot',
    indicators: {
      topics: ['spring', 'spring-boot'],
      files: ['pom.xml', 'build.gradle'],
      languageContext: ['Java'],
    },
    priority: 90,
  },
  {
    name: 'Laravel',
    indicators: {
      topics: ['laravel', 'php'],
      files: ['artisan', 'composer.json'],
      languageContext: ['PHP'],
    },
    priority: 90,
  },

  {
    name: 'Tailwind CSS',
    indicators: {
      topics: ['tailwindcss', 'tailwind'],
      dependencies: ['tailwindcss'],
      devDependencies: ['tailwindcss'],
      files: ['tailwind.config.js'],
    },
    priority: 75,
  },
  {
    name: 'Bootstrap',
    indicators: {
      topics: ['bootstrap'],
      dependencies: ['bootstrap'],
    },
    priority: 70,
  },

  {
    name: 'React Native',
    indicators: {
      topics: ['react-native', 'mobile'],
      dependencies: ['react-native'],
      languageContext: ['JavaScript', 'TypeScript'],
    },
    priority: 95,
  },
  {
    name: 'Flutter',
    indicators: {
      topics: ['flutter', 'dart'],
      files: ['pubspec.yaml'],
      languageContext: ['Dart'],
    },
    priority: 95,
  },

  {
    name: 'Electron',
    indicators: {
      topics: ['electron'],
      dependencies: ['electron'],
      languageContext: ['JavaScript', 'TypeScript'],
    },
    priority: 80,
  },
];


export function detectFrameworksFromTopics(topics: string[]): string[] {
  const detectedFrameworks: Set<string> = new Set();
  const lowerTopics = topics.map(t => t.toLowerCase());

  FRAMEWORK_RULES.forEach(rule => {
    if (rule.indicators.topics) {
      const hasTopicMatch = rule.indicators.topics.some(topic =>
        lowerTopics.includes(topic.toLowerCase()),
      );
      if (hasTopicMatch) {
        detectedFrameworks.add(rule.name);
      }
    }
  });

  return Array.from(detectedFrameworks);
}


export function detectFrameworksFromPackageJson(
  packageJson: any,
  language?: string,
): string[] {
  const detectedFrameworks: Set<string> = new Set();
  const allDeps = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  FRAMEWORK_RULES.forEach(rule => {
    let score = 0;

    // 의존성 체크
    if (rule.indicators.dependencies) {
      const depMatches = rule.indicators.dependencies.filter(
        dep => allDeps[dep],
      ).length;
      score += depMatches * 10;
    }

    // devDependencies 체크
    if (rule.indicators.devDependencies) {
      const devDepMatches = rule.indicators.devDependencies.filter(
        dep => allDeps[dep],
      ).length;
      score += devDepMatches * 5;
    }

    // 언어 컨텍스트 체크
    if (rule.indicators.languageContext && language) {
      const hasLanguageMatch =
        rule.indicators.languageContext.includes(language);
      if (hasLanguageMatch) {
        score += 5;
      }
    }

    // 점수가 5 이상이면 탐지된 것으로 간주
    if (score >= 5) {
      detectedFrameworks.add(rule.name);
    }
  });

  return Array.from(detectedFrameworks);
}

/**
 * 파일 목록에서 프레임워크 탐지
 */
export function detectFrameworksFromFiles(files: string[]): string[] {
  const detectedFrameworks: Set<string> = new Set();
  const fileNames = files.map(f => f.toLowerCase());

  FRAMEWORK_RULES.forEach(rule => {
    if (rule.indicators.files) {
      const hasFileMatch = rule.indicators.files.some(file =>
        fileNames.includes(file.toLowerCase()),
      );
      if (hasFileMatch) {
        detectedFrameworks.add(rule.name);
      }
    }
  });

  return Array.from(detectedFrameworks);
}

/**
 * 모든 정보를 종합해서 프레임워크 탐지
 */
export function detectFrameworks({
  topics = [],
  packageJson = null,
  files = [],
  language = undefined,
}: {
  topics?: string[];
  packageJson?: any;
  files?: string[];
  language?: string;
}): {frameworks: string[]; primaryFramework?: string} {
  const allFrameworks: Set<string> = new Set();

  // Topics에서 탐지
  detectFrameworksFromTopics(topics).forEach(fw => allFrameworks.add(fw));

  // package.json에서 탐지
  if (packageJson) {
    detectFrameworksFromPackageJson(packageJson, language).forEach(fw =>
      allFrameworks.add(fw),
    );
  }

  // 파일에서 탐지
  detectFrameworksFromFiles(files).forEach(fw => allFrameworks.add(fw));

  const frameworks = Array.from(allFrameworks);

  // 주요 프레임워크 결정 (우선순위 기반)
  let primaryFramework: string | undefined;
  let highestPriority = 0;

  frameworks.forEach(fw => {
    const rule = FRAMEWORK_RULES.find(r => r.name === fw);
    if (rule && rule.priority > highestPriority) {
      highestPriority = rule.priority;
      primaryFramework = fw;
    }
  });

  return {frameworks, primaryFramework};
}

/**
 * GitHub API를 통해 package.json 가져오기
 */
export async function fetchPackageJson(
  owner: string,
  repo: string,
  token: string,
): Promise<any | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/repos/${owner}/${repo}/contents/package.json`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      },
    );

    if (!response.ok) {
      return null; // package.json이 없음
    }

    const data = await response.json();

    if (data.content) {
      // Base64 디코딩
      const content = Buffer.from(data.content, 'base64').toString('utf-8');
      return JSON.parse(content);
    }

    return null;
  } catch (error) {
    console.warn(`package.json 가져오기 실패 (${owner}/${repo}):`, error);
    return null;
  }
}
