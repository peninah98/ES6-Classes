try {
  const result = someUnidefiendVariable + 79
  console.log(result)
} catch (error) {
  console.log("Error occured ", error.message)
}
// the flow of the error handling using try and catch
// It will execute try block and when error occurs it will ignore try block
// then execute the catch block 
