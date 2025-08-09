'use client';

import styles from './Achievements.module.css';

// 업적 예제 데이터
const achievementsData = [
  { id: 1, title: 'First Encounter with Hamabi', description: 'The day you first met Hamabi!', icon: '🌟' },
  { id: 2, title: '10 Conversations with Hamabi', description: 'Had 10 conversations with Hamabi', icon: '💬' },
  { id: 3, title: 'Discovered Hamabi\'s Secret', description: 'Found Hamabi\'s hidden message', icon: '🔍' },
  { id: 4, title: 'Together Until the End of the Day', description: 'Stayed with Hamabi until the end of the day', icon: '🕰️' },
  { id: 5, title: 'Hamabi\'s Friend', description: 'Had 50 conversations with Hamabi', icon: '🤝' },
  { id: 6, title: '100 Laughs with Hamabi', description: 'Laughed 100 times with Hamabi', icon: '😂' },
  { id: 7, title: 'Conversation with the Stars', description: 'Talked about the universe with Hamabi', icon: '🌌' },
  { id: 8, title: 'Gift from Hamabi', description: 'Received a surprise message from Hamabi', icon: '🎁' },
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
