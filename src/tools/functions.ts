export const courseTypeDetector = (type : string) => {
    if (type == "register"){
        return "در حال ثبت نام"
    } else if (type == "completed") {
        return "پایان یافته"
    } else if (type == "ongoing") {
        return "در حال برگزاری"
    }
}
export const courseTypeColor =(type : string) => {
        if (type == "register"){
        return "#1565C0"
    } else if (type == "completed") {
        return "#f70000" 
    } else if (type == "ongoing") {
        return "#22a000"
    }
}
