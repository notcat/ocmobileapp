import { useForm } from "react-hook-form";

import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const Login: React.FC = () => {
    const { register, handleSubmit } = useForm();

    // TODO: Add user class
    // class User {
    //     username: string;
    //     password: string;
    // }

    const onSubmit = (data: any) => {
        // Log in user using credentials.
        
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonContent className='logon-div'>
                    <IonCard className='logon-card'>
                        <IonCardHeader>
                            <IonCardTitle>Login</IonCardTitle>
                        </IonCardHeader>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <IonCardContent>

                                <IonCardTitle>Username: <IonInput {...register("username")} /> </IonCardTitle>
                                <IonCardTitle>Password: <IonInput type='password' {...register("password")} /> </IonCardTitle>

                            </IonCardContent>
                            <IonCardContent className='logon-buttons'>
                                <IonButton color="secondary" type="submit" >Login</IonButton>
                                <IonButton color="danger">Cancel</IonButton>
                            </IonCardContent>
                        </form>
                    </IonCard>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Login;
