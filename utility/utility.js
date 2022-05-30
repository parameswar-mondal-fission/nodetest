'use strict';

exports.handleValidationError = (err) => {
    let errObj = {};

    for (let field in err.errors) {
        switch (err.errors[field].path) {
            case 'firstName':
                errObj.firstNameErr = err.errors[field].message;
                break;
            case 'email':
                errObj.emailErr = err.errors[field].message;
                break;
            case 'phone':
                errObj.phoneErr = err.errors[field].message;
                break;
            case 'gender':
                errObj.genderErr = err.errors[field].message;
                break;
            case 'pin':
                errObj.pinErr = err.errors[field].message;
                break;
            default:
                break;
        }
    }

    return errObj;
};