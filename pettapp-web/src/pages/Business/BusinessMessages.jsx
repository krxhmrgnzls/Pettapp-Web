import React, { useState } from 'react';
import BusinessLayout from '../../component/layout/BusinessLayout';
import styles from './BusinessMessages.module.css';

const BusinessMessages = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Maria Santos',
      lastMessage: 'Hi! Is my grooming appointment confirmed?',
      time: 'Active 40 seconds ago',
      avatar: null,
      unread: false
    },
    {
      id: 2,
      name: 'John Doe',
      lastMessage: 'Perfect! My bird loved the grooming service',
      time: '2 hours ago',
      avatar: null,
      unread: false
    },
    {
      id: 3,
      name: 'Mike Chen',
      lastMessage: 'Thank you for taking care of Whiskers',
      time: 'Yesterday',
      avatar: null,
      unread: false
    }
  ];

  const messages = {
    1: [
      {
        id: 1,
        sender: 'Maria Santos',
        text: 'Hi! Is my grooming appointment confirmed for tomorrow?',
        time: '10:30 AM',
        isOwn: false
      },
      {
        id: 2,
        sender: 'You',
        text: 'Yes, your appointment is confirmed for 2:00 PM tomorrow.',
        time: '10:32 AM',
        isOwn: true
      },
      {
        id: 3,
        sender: 'Maria Santos',
        text: 'Great! Thank you so much.',
        time: '10:33 AM',
        isOwn: false
      }
    ],
    2: [
      {
        id: 1,
        sender: 'John Doe',
        text: 'My bird loved the grooming service!',
        time: '2:00 PM',
        isOwn: false
      },
      {
        id: 2,
        sender: 'You',
        text: "That's wonderful to hear! We're glad your bird enjoyed it.",
        time: '2:05 PM',
        isOwn: true
      }
    ],
    3: [
      {
        id: 1,
        sender: 'Mike Chen',
        text: 'Thank you for taking care of Whiskers during our vacation.',
        time: 'Yesterday',
        isOwn: false
      },
      {
        id: 2,
        sender: 'You',
        text: 'It was our pleasure! Whiskers was a joy to have.',
        time: 'Yesterday',
        isOwn: true
      }
    ]
  };

  const currentConversation = conversations.find(c => c.id === selectedConversation);
  const currentMessages = messages[selectedConversation] || [];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText.trim()) {
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <BusinessLayout>
      <div className={styles.messagesContainer}>
        {/* Conversations List */}
        <div className={styles.conversationsList}>
          <div className={styles.conversationsHeader}>
            <h2 className={styles.conversationsTitle}>Messages</h2>
            <div className={styles.searchContainer}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search conversations..."
                className={styles.searchInput}
              />
              <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className={styles.conversationsBody}>
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`${styles.conversationItem} ${
                  selectedConversation === conversation.id ? styles.conversationActive : ''
                }`}
              >
                <div className={styles.conversationAvatar}>
                  <svg className={styles.avatarIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                <div className={styles.conversationDetails}>
                  <div className={styles.conversationHeader}>
                    <h3 className={styles.conversationName}>{conversation.name}</h3>
                    <span className={styles.conversationTime}>{conversation.time}</span>
                  </div>
                  <p className={styles.conversationMessage}>{conversation.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className={styles.chatArea}>
          <div className={styles.chatHeader}>
            <div className={styles.chatUserInfo}>
              <div className={styles.chatAvatar}>
                <svg className={styles.avatarIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className={styles.chatUserDetails}>
                <h3 className={styles.chatUserName}>{currentConversation?.name}</h3>
                <p className={styles.chatUserStatus}>{currentConversation?.time}</p>
              </div>
            </div>
            
            <div className={styles.chatActions}>
              <button className={styles.chatActionBtn}>
                <svg className={styles.actionIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
              <button className={styles.chatActionBtn}>
                <svg className={styles.actionIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </button>
              <button className={styles.chatActionBtn}>
                <svg className={styles.actionIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.messagesArea}>
            <div className={styles.messagesList}>
              {currentMessages.map((message) => (
                <div
                  key={message.id}
                  className={`${styles.messageWrapper} ${
                    message.isOwn ? styles.messageWrapperOwn : ''
                  }`}
                >
                  <div
                    className={`${styles.messageBubble} ${
                      message.isOwn ? styles.messageBubbleOwn : styles.messageBubbleOther
                    }`}
                  >
                    <p className={styles.messageText}>{message.text}</p>
                    <p className={`${styles.messageTime} ${
                      message.isOwn ? styles.messageTimeOwn : ''
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSendMessage} className={styles.messageForm}>
            <div className={styles.messageInputContainer}>
              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Type a message..."
                className={styles.messageInput}
              />
              <button type="submit" className={styles.sendBtn}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </BusinessLayout>
  );
};

export default BusinessMessages;