import type { Dispatch, SetStateAction } from "react";

export type OTPFooterProps = {
  setEmail?: Dispatch<SetStateAction<string>> | undefined;
  setStep?: Dispatch<SetStateAction<string>> | undefined;
};

export type OPTHeaderProps = { email: string | undefined };

export type ContextMenu = {
  id?: string;
  left?: number;
  top?: number;
};

export type ChatProps = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  isOnline: boolean;
  avatar: string | undefined;
  contextMenu: ContextMenu | null;
  setContextMenu: Dispatch<SetStateAction<null | ContextMenu>>;
  isGroup: boolean;
  bio: string;
  username: string;
  membersCount?: number;
};

export type MessageType = {
  id: string;
  sender: string;
  text: string;
  time: string;
  isOwn: boolean;
};
