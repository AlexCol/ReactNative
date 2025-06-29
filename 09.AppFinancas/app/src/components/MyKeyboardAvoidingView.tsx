import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

const containerTailwindClass = `
  flex-1
  items-center
  justify-center
`;

type MyKeyboardAvoidingViewProps = {
  children: React.ReactNode,
  className?: string,
}

function MyKeyboardAvoidingView({ children, className }: MyKeyboardAvoidingViewProps) {
  const baseTailwindClass = className ?? containerTailwindClass;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className={baseTailwindClass}
    >
      {children}
    </KeyboardAvoidingView>
  )
}

export default MyKeyboardAvoidingView