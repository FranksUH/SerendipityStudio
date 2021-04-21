import { Button, ButtonGroup, Dialog, DialogContent, DialogTitle, FormControl, IconButton, InputAdornment, TextField, Typography } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { dialogStyles } from './ThemeStyles';

export type LoginFormData = {
    userName: string,
    password: string
};

export interface IProps{
    visible: boolean,
    submitHandler: (data: LoginFormData)=>void,
    cancelHandler: ()=>void,
};

const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

const LoginModal = ({ visible, submitHandler, cancelHandler }: IProps) => {    
    const styles = dialogStyles();
    const [showPassword, setShowPassword] = useState(false);

    const { register, formState: { errors, isValid } ,handleSubmit } = useForm<LoginFormData>({
        mode: 'onChange'
    });

    console.log('Errors: ', errors);

    return (
        <Dialog open={visible} maxWidth='sm'>
            <DialogTitle>
                <Typography variant='h5'>
                    Please type your credentials
                </Typography>
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <FormControl>
                        <TextField
                            id='usernameInput'
                            label='Username'
                            variant='outlined'
                            className={styles.inputFields}
                            error={Boolean(errors.userName)}                        
                            helperText={Boolean(errors.userName)?'Username is required':''}                                    
                            {...register("userName", {required: true})}
                        />

                        <TextField
                            id='passwordInput'
                            label='Password'
                            variant='outlined'
                            className={styles.inputFields}
                            type={showPassword? 'text': 'password'}
                            error={Boolean(errors.password)}                        
                            helperText={Boolean(errors.password)?'Password is required':''}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={()=> {setShowPassword(!showPassword)}}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}                        
                            {...register("password", {required: true})}
                        />
                        <ButtonGroup fullWidth>
                            <Button className={styles.cancelButton} onClick={cancelHandler}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={!isValid} className={styles.dialogButton}>
                                Submit
                            </Button>
                        </ButtonGroup>                        
                    </FormControl>
                </form>
            </DialogContent>
        </Dialog>        
    )
}
export default LoginModal;