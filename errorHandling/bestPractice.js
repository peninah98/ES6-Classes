// 1. Use try catch block to catch errors
try {
    
} catch (error) {
    
}

// 2. Use Descriptive Error Messages
throw new Error(`Can not read properties of null or undefiend`)

// 3. Avoid swallowing error
try {
    console.log("jello");
} catch (error) {
    // never leave this block empty because the error must be suppressed and cause some unexpected uncought of errors
}

// 4. Log errors to see what is going on

try {
    
} catch (error) {
    // Log the error with a logging libray so that other developers will know what error is occuring
    
}