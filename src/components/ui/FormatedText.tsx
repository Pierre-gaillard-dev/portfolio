export interface FormatedTextParams {
  text: string
}

const FormatedText = ({ text }: FormatedTextParams) => {
    // Replace literal \n strings with actual newlines
    const normalizedText = text.replace(/\\n/g, '\n')
    
    let result = normalizedText.split("\n").map((line, index) => {
      if (line !== "") {
        return <p key={index}>{line}</p>
      } else {
        return <br key={index} />
      }
    })
    return <>{result}</>
  }

export default FormatedText