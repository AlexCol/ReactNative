
//View
const backgroundTailwindClass = `
  flex-1
  bg-background  
`;

//KeyboardAvoidingView
const containerTailwindClass = `
  flex-1
  items-center
  justify-center
`;

//Image
const logoTailwindClass = `mb-logo`;

//View
const areaInputTailwindClass = `
  flex-col 
  w-90%`;

//TextInput
const inputTailwindClass = `
  bg-white
  p-2.5
  mb-3.5
  text-17px
  rounded-lg
  text-gray-900
`;

//TouchableOpacity
const submitButtonTailwindClass = `
  w-90%
  h-11
  rounded-lg
  bg-submitButton
  mt-2.5
  items-center
  justify-center
`;

//TouchableOpacity
const disabledSubmitButtonTailwindClass = `
  w-90%
  h-11
  rounded-lg
  bg-gray-400
  mt-2.5
  items-center
  justify-center  

`;

//Text
const submitTextTailwindClass = `
  text-20px
  text-white
`;

//TouchableOpacity
const linkTailwindClass = `
  mt-2.5
  mb-2.5
`;

//Text
const linkTextTailwindClass = `
  text-linkText
`;

export default {
  background: backgroundTailwindClass,
  container: containerTailwindClass,
  logo: logoTailwindClass,
  areaInput: areaInputTailwindClass,
  input: inputTailwindClass,
  submitButton: submitButtonTailwindClass,
  disabledSubmitButton: disabledSubmitButtonTailwindClass,
  submitText: submitTextTailwindClass,
  link: linkTailwindClass,
  linkText: linkTextTailwindClass,
}