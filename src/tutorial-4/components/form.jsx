import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

function Form({ onSave }) {
  const [fields, setFields] = React.useState({ email: '', text: '', name: '' });

  const onFields = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    onSave(fields.name, fields.email, fields.text);
    setFields({ email: '', text: '', name: '' });
  };

  return (
    <div style={{ border: '1px solid grey', borderRadius: '15px', marginTop: '20px' }} className="form">
      <h3 className="form-recall">Обратная связь:</h3>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}>
        <TextField value={fields.name} onChange={onFields} name="name" id="demo-helper-text-misaligned" placeholder="Имя" />
        <TextField value={fields.email} onChange={onFields} name="email" id="demo-helper-text-misaligned-no-helper" placeholder="Почта" />
        <TextareaAutosize value={fields.text} onChange={onFields} name="text" aria-label="minimum height" minRows={3} placeholder="Текст..." style={{ width: '223px' }} />
        <TextField style={{ background: '#1f7eff', color: '#fff', borderRadius: '10px' }} disabled={!fields.name || !fields.email || !fields.text} onClick={onSubmit} className="box_text" id="demo-helper-text-misaligned-no-helper" type="submit" />
      </Box>
    </div>
  );
}

export default Form;
