import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

const containerTailwindClass = `
  flex-1
  items-center
  justify-center
`;

function MyKeyboardAvoidingView({ children }: { children: React.ReactNode }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className={containerTailwindClass}
    >
      {children}
    </KeyboardAvoidingView>
  )
}

export default MyKeyboardAvoidingView