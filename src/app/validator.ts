import { AbstractControl } from "@angular/forms";

export function zipValidator(control:AbstractControl){
    if(control && (control.value!=null || control.value!=undefined)){
        const regex = new RegExp('^[0-9]{6}$');
        if(!regex.test(control.value)){
            return {
                isError:true
            };
        }
    }
    return null;
}
export function passwordValidator(control:AbstractControl){
    if(control && (control.value!=null || control.value!=undefined)){
        const cfpassword = control.value;
        const pwd=control.root.get('password');
        if(pwd)
        {
            if(pwd.value!=cfpassword || pwd.value ===''){
                return {
                    isError:true
                   };
            }
        }
    }
    return null;
}