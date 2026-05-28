// src/app/dashboard/chat/page.tsx
'use client';

import React from 'react';
import NavSidebar from '../../../components/ChatLayout/NavSidebar';
import ConversationListPanel from '../../../components/ChatLayout/ConversationListPanel';
import ChatArea from '../../../components/ChatLayout/ChatArea';
import ContactDetailsPanel from '../../../components/ChatLayout/ContactDetailsPanel';

export default function ChatDashboard() {
  return (
    <div className="flex h-screen w-full bg-[#0e1117] text-white">
      <NavSidebar />
      <ConversationListPanel />
      <ChatArea />
      <ContactDetailsPanel />
    </div>
  );
}
