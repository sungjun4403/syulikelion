function ifEmpty (toValidate, errorSpanId) {
    const inputElement = document.getElementById(toValidate)
    const errorSpan = document.getElementById(errorSpanId)
    if (inputElement.value == "") {
        errorSpan.style.visibility = "visible"    
        return true
    } else {
        errorSpan.style.visibility = "hidden"
        return false    
    }
}



export default ifEmpty;