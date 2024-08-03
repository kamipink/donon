const TYPE_ENUM = "enum";
const TYPE_STRING = "string";
const TYPE_NUMBER = "number";

const f = { type: "enum", value: 42 };

if (f.type === TYPE_ENUM) {
    console.log("Handling enum type logic.");
    // Specific logic for enum type
} else if (f.type === TYPE_STRING) {
    console.log("Handling string type logic.");
    // Specific logic for string type
} else if (f.type === TYPE_NUMBER) {
    console.log("Handling number type logic.");
    // Specific logic for number type
} else {
    console.log("Unknown type.");
    // Fallback logic for unknown types
}
