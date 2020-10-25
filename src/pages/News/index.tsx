import React, { useState, FormEvent, useEffect } from 'react';
import { Container, Form, TableContainer } from './styles';
import api from '../../service/api';
import { Edit, Delete } from '@material-ui/icons'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)'
    },
    icons: {
      cursor: 'pointer'
    },
    inputMaterial: {
      width: '100%'
    }
  }),
);

interface NewsNotices {
  _id: string;
  newNotice: string;
}

const News: React.FC = () => {
  const classes = useStyles();
  const [notice, setNotice] = useState<NewsNotices[]>([]);
  const [newNoticeChange, setNewNotice] = useState('');
  const [open, setOpen] = useState(false);
  const [newss, setNewss] = useState<NewsNotices[]>([]);
  const [update, setUpdate] = useState('');
  const [currentNews, setCurrentNews] = useState<NewsNotices | null>(null);


  async function handleAddUser(event: FormEvent): Promise<void> {
    event.preventDefault();
    try {
      const response = await api.post('/news', {
        newNotice: newNoticeChange,
      });
      const notices = response.data;
      setNotice([...notice, notices])
      setNewNotice('');
      GetUsers();
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    GetUsers();
  }, []);

  async function GetUsers() {
    const response = await api.get('/news');
    setNewss(response.data.docs);

  }
  async function handleRemoveUser(id: any) {
    await api.delete(`news/${id}`);
    const deleteNot = newss.filter(item => item._id !== id);
    setNewss([...deleteNot]);
  }

  async function handleUpdateUser() {
    await api.put(`news/${currentNews ?._id}`, { newNotice: update })
    GetUsers();
    handleClose();
    setUpdate('');
  }
  const handleOpen = (notice: NewsNotices) => {
    setOpen(true);
    setCurrentNews(notice);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentNews(null);
  };
  const body = (
    <div className={classes.modal}>
      <h2 id="simple-modal-title">Atualizar Noticia</h2>
      <TextField
        value={update}
        onChange={e => setUpdate(e.target.value)}
        className={classes.inputMaterial}
        label="Nome"
      />
      <br /> <br />
      <div>
        <Button onClick={handleUpdateUser} color="primary">Atualizar</Button>
        <Button onClick={handleClose}>Cancelar</Button>
      </div>
    </div>
  );

  return (
    <>

      <Container>
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
      </Link>
        <Form onSubmit={handleAddUser}>
          <input
            value={newNoticeChange}
            onChange={e => setNewNotice(e.target.value)}
            placeholder="Digite para criar uma nova noticia"
          />
          <button type="submit">Criar Noticia</button>
        </Form>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>News</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {newss.map(notice => (
                <tr key={notice._id}>
                  <td className="title">{notice.newNotice}</td>
                  <td>
                    <Edit
                      type="button"
                      onClick={() => handleOpen(notice)}
                      className={classes.icons}
                    >Edit</Edit>

                    <Delete
                      style={{ color: "#e83f5b", marginRight: '5' }}
                      onClick={() => handleRemoveUser(notice._id)}
                      className={classes.icons}
                    >Delete</Delete>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
        <Modal
          open={open}
          aria-labelledby="simple-modal-title"
        >
          {body}
        </Modal>
      </Container>
    </>
  )
}
export default News;
