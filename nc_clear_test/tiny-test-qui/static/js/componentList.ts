interface IPropExtensionUX {
    required?: boolean;
    type?: StringConstructor | BooleanConstructor | NumberConstructor | ObjectConstructor | FunctionConstructor | ArrayConstructor | undefined | null | string;
    editorDefaultValue?: string;
    runTimeDefaultValue?: string;
    runTimeOverrideValue?: string;
    GroupName?: string;
    options?: Array<string | { Name: string, Value: string }>
};
type ComponentOptions = Record<string, Record<string, IPropExtensionUX>>;


//#region JS Section
var componentOptions: ComponentOptions = {
    "VBtn": {
        "regular": {
            "editorDefaultValue": "true",
            "type": "Boolean"
        },
        "color": {
            "editorDefaultValue": "'error'",
            "runTimeOverrideValue": "error",
            "runTimeDefaultValue": "primary",
            "type": "String",
            "options": ["'primary'", "'secondary'", "'accent'", "'success'", "'error'", "'info'", "'warning'"]
        }
    }
};

if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = componentOptions;
} else {
    window["QEditorComponentOptions"] = componentOptions;
}
//#region JS Section