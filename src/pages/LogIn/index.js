import { Avatar, Box, Container, Divider, Fade, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BsDoorOpen, BsPerson } from 'react-icons/bs';
import { Button, Card, Input, Logo } from '../../components';
import { PAGES } from '../../constants/pages';
import { usePageTitle } from '../../hooks';
import PasswordInput from './PasswordInput';
import ProtectionLogIn from './ProtectionLogIn';

const LogIn = () => {
    // medium breakpoint
    const md = useMediaQuery((theme) => theme.breakpoints.up('md'));

    // CHANGE PAGE INFO
    usePageTitle(PAGES.logIn.title);

    // Form
    const {
        formState: { errors },
        handleSubmit,
        control,
    } = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    // ========= submit
    const onSubmit = (data, event) => {
        event.preventDefault();
    };

    return (
        <ProtectionLogIn auth={true}>
            <Box
                sx={(theme) => ({
                    backgroundColor: theme.palette.primary.main,
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    py: 5,
                })}
            >
                <Fade in={true} timeout={1000}>
                    <Container>
                        <Grid container spacing={5} alignItems="center">
                            <Grid item md={5.75} xs={12}>
                                <Stack spacing={3}>
                                    <Logo white alignSelf="center" />
                                    <Typography
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize['3xl'],
                                            textAlign: 'center',
                                            fontWeight: theme.fontWeight.bold,
                                            color: theme.palette.common.white,
                                        })}
                                    >
                                        la plateforme Impact Academy
                                    </Typography>
                                    <Typography
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize['md'],
                                            fontWeight: theme.fontWeight.light,
                                            color: theme.palette.common.white,
                                            textAlign: 'justify',
                                            textAlignLast: 'center',
                                            lineHeight: 2,
                                        })}
                                    >
                                        Impact Academy, a program funded by USAID under ISED-MS, is executed by Deloitte and implemented by
                                        the Social Innovation Lab at UM6P. It empowers individuals, focusing on youth, women, and
                                        differently-abled, aligning their skills with job market demands. Impact Academy,
                                    </Typography>
                                    <Typography
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize['md'],
                                            textAlign: 'justify',
                                            fontWeight: theme.fontWeight.light,
                                            color: theme.palette.common.white,
                                            textAlignLast: 'center',
                                            lineHeight: 2,
                                            fontFamily: theme.fontFamily.arabic,
                                        })}
                                    >
                                        إمباكت أكاديمي، هو برنامج ممول من الوكالة الأمريكية للتنمية الدولية ضمن إطار مشروع التنمية
                                        الاجتماعية والاقتصادية الدامجة لجهة مراكشءآسفي، تنفذه شركة ديلويت و مختبر الابتكار الاجتماعي في
                                        جامعة محمد السادس متعددة التخصصات. هو برنامج يعمل على تمكين الأفراد، مع التركيز على الشباب والنساء
                                        وذوي القدرات المختلفة، وملاءمة مهاراتهم مع متطلبات سوق العمل.
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item md={0.5} xs={12} alignSelf="stretch">
                                <Divider
                                    orientation={md ? 'vertical' : 'horizontal'}
                                    sx={(theme) => ({ height: '100%', borderColor: theme.palette.secondary.main })}
                                />
                            </Grid>
                            <Grid item md={5.75} xs={12}>
                                <Card>
                                    <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%' }}>
                                        <Stack p={3} spacing={4} height="100%">
                                            <Box display="flex" alignItems="center">
                                                <Avatar
                                                    sx={(theme) => ({
                                                        fontSize: theme.fontSize['4xl'],
                                                        color: theme.palette.secondary.main,
                                                        background: 'transparent',
                                                        width: 55,
                                                        height: 55,
                                                    })}
                                                >
                                                    <BsDoorOpen />
                                                </Avatar>
                                                <Typography
                                                    sx={(theme) => ({
                                                        fontSize: theme.fontSize['3xl'],
                                                        textAlign: 'center',
                                                        fontWeight: theme.fontWeight.bold,
                                                        color: theme.palette.common.black,
                                                    })}
                                                >
                                                    Bienvenue
                                                </Typography>
                                            </Box>
                                            <Controller
                                                control={control}
                                                name="username"
                                                rules={{
                                                    required: { value: true, message: "Le nom d'utilisateur est obligatoire" },
                                                }}
                                                render={({ field }) => (
                                                    <Input
                                                        error={errors.username ? true : false}
                                                        {...field}
                                                        helperText={errors.username ? errors.username.message : ''}
                                                        type="text"
                                                        label="Nom d'utilisateur"
                                                        placeholder="utilisateur"
                                                        iconStart={<BsPerson />}
                                                    />
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name="password"
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: 'Le mot de passe est obligatoire',
                                                    },
                                                    minLength: {
                                                        value: 6,
                                                        message: 'Le mot de passe doit comporter entre 6 et 69 caractères',
                                                    },
                                                    maxLength: {
                                                        value: 69,
                                                        message: 'Le mot de passe doit comporter entre 6 et 69 caractères',
                                                    },
                                                }}
                                                render={({ field }) => <PasswordInput errors={errors} {...field} />}
                                            />
                                            <Button color="secondary" type="submit">
                                                Se connecter
                                            </Button>
                                        </Stack>
                                    </form>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Fade>
            </Box>
        </ProtectionLogIn>
    );
};

export default LogIn;
