import { Box, Container, Grid, Fade, Stack, Typography } from '@mui/material';
import React from 'react';
import { Logo } from '../../components';
// import { BordedCard, Logo } from '../../components';

const LogIn = () => {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.palette.primary.main,
            })}
        >
            <Stack minHeight="100vh" justifyContent="center" alignItems="center">
                <Container>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item md={6} xs={12}>
                            <Stack spacing={4} alignItems="center" sx={{}}>
                                <Logo white lg />
                                <Typography
                                    sx={(theme) => ({
                                        fontSize: theme.fontSize['2xl'],
                                        textAlign: 'center',
                                        fontWeight: theme.fontWeight.extrabold,
                                        color: theme.palette.common.white,
                                    })}
                                >
                                    Bienvenue sur la plateforme Impact Academy
                                </Typography>
                                <Typography
                                    sx={(theme) => ({
                                        fontSize: theme.fontSize['md'],
                                        textAlign: 'justify',
                                        fontWeight: theme.fontWeight.light,
                                        color: theme.palette.common.white,
                                        textAlignLast: 'center',
                                        lineHeight: 2,
                                    })}
                                >
                                    Impact Academy, a program funded by USAID under ISED-MS, is executed by Deloitte and implemented by the
                                    Social Innovation Lab at UM6P. It empowers individuals, focusing on youth, women, and differently-abled,
                                    aligning their skills with job market demands. Impact Academy,
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
                                    إمباكت أكاديمي، هو برنامج ممول من الوكالة الأمريكية للتنمية الدولية ضمن إطار مشروع التنمية الاجتماعية
                                    والاقتصادية الدامجة لجهة مراكشءآسفي، تنفذه شركة ديلويت و مختبر الابتكار الاجتماعي في جامعة محمد السادس
                                    متعددة التخصصات. هو برنامج يعمل على تمكين الأفراد، مع التركيز على الشباب والنساء وذوي القدرات المختلفة،
                                    وملاءمة مهاراتهم مع متطلبات سوق العمل.
                                </Typography>
                            </Stack>
                        </Grid>
                        {/* <Grid item md={6} xs={12}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Stack spacing={4}>
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
                                                    label="nom d'utilisateur"
                                                    placeholder="utilisateur"
                                                    iconStart={<User />}
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
                                            render={({ field }) => (
                                                <Input
                                                    error={errors.password ? true : false}
                                                    {...field}
                                                    type={showPassword ? 'text' : 'password'}
                                                    label="Mot de passe"
                                                    placeholder="Entrez votre mot de passe"
                                                    helperText={errors.password ? errors.password.message : ''}
                                                    iconStart={<LockClosed />}
                                                    iconEnd={
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            sx={(theme) => ({
                                                                color: theme.palette.common.white,
                                                                fontSize: theme.fontSize.md,
                                                            })}
                                                        >
                                                            {showPassword ? <EyeSlash /> : <Eye />}
                                                        </IconButton>
                                                    }
                                                />
                                            )}
                                        />
                                        <Button variant="outlined" color="white" type="submit">
                                            Se connecter
                                        </Button>
                                    </Stack>
                                </form>
                            </Grid> */}
                    </Grid>
                </Container>
            </Stack>
        </Box>
    );
};

export default LogIn;
