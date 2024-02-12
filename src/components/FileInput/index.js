import { Box } from '@mui/material';
import React, { useState } from 'react';
import Input from '../Input';
import { BsFile } from 'react-icons/bs';

const FileInput = ({ setError, setValue }) => {
    // ========== add file
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            if (e.target.files.length > 1) {
                setError('file', { message: 'Veuillez télécharger un seul fichier' });
            } else {
                setFile(e.target.files[0]);
                setValue('file', e.target.files[0].name);
            }
        }
    };

    const FileInputComponent = ({ errors, field }) => {
        return (
            <Box position="relative" width="100%">
                <Input
                    error={errors.file ? true : false}
                    {...field}
                    helperText={errors.file ? errors.file.message : ''}
                    type="text"
                    label="Fichier list des partipants"
                    placeholder="Ajouter un fichier"
                    iconStart={<BsFile />}
                    sx={{ width: '100%' }}
                />
                <input
                    onChange={handleFileChange}
                    name="file"
                    multiple={false}
                    type="file"
                    title=""
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        cursor: 'pointer',
                    }}
                />
            </Box>
        );
    };

    return {
        FileInputComponent,
        file,
    };
};

export default FileInput;
