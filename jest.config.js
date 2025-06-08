const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Next.js 프로젝트 루트 디렉토리
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // 테스트 전에 실행할 셋업 파일
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
  },
};

module.exports = createJestConfig(customJestConfig);