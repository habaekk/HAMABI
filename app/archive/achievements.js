'use client';

import styles from './archive.module.css';

// 업적 예제 데이터
const achievementsData = [
  { id: 1, title: '하마비 첫 만남', description: '하마비를 처음 만난 날!', icon: '🌟' },
  { id: 2, title: '하마비와 10번의 대화', description: '하마비와 10번의 대화를 나눔', icon: '💬' },
  { id: 3, title: '하마비의 비밀 발견', description: '하마비의 숨겨진 메시지를 발견함', icon: '🔍' },
  { id: 4, title: '하루를 끝까지 함께', description: '하루 끝까지 하마비와 함께', icon: '🕰️' },
  { id: 5, title: '하마비의 친구', description: '하마비와 50번의 대화를 나눔', icon: '🤝' },
  { id: 6, title: '하마비와 100번의 웃음', description: '하마비와 함께 100번 웃음', icon: '😂' }
];

export default function Achievements() {
  return (
    <div className={styles.achievementsGrid}>
      {achievementsData.map((achievement) => (
        <div key={achievement.id} className={styles.achievementCard}>
          <div className={styles.achievementIcon}>{achievement.icon}</div>
          <div className={styles.achievementTitle}>{achievement.title}</div>
          <div className={styles.achievementDescription}>{achievement.description}</div>
        </div>
      ))}
    </div>
  );
}
