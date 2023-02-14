const ControllerMain = {
    filnameParser: (name) => {
        const index = name.lastIndexOf('.');
        return index === -1 ? { name: name, type: "" } : { name: name.slice(0, index), type: name.slice(index) }
    },

    filenameValidationChecker: (name) => {
        // valid code : 1 | invalid code : 0 
        const result = { code: 1, name: name };
        const invalidRegs = /[*|\\":/?<> ]/gi;
        if (invalidRegs.test(name)) {
            result.code = 0;
            result.name = name.replace(invalidRegs, "_");
        }
        return result;
    }
}

export default ControllerMain;