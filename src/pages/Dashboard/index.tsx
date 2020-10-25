import React, { useState, FormEvent, useEffect } from 'react';
import Header from '../../components/Header';
import { Container, Form, TableContainer } from './styles';
import Cards from '../../components/Cards';
import api from '../../service/api';
import { Edit, Delete } from '@material-ui/icons'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField, Button } from '@material-ui/core';

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

interface User {
  name: string;
  _id: string;
}
const Dashboard: React.FC = () => {
  const classes = useStyles();
  const [user, setUser] = useState<User[]>([]);
  const [newUser, setNewUser] = useState('');
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [update, setUpdate] = useState('');
  const [currentUser, setCurrentUser] = useState<User | null>(null);


  async function handleAddUser(event: FormEvent): Promise<void> {
    event.preventDefault();
    try {
      const response = await api.post('/users', {
        name: newUser,
      });
      const repository = response.data;
      setUser([...user, repository])
      setNewUser('');
      GetUsers();
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    GetUsers();
  }, []);

  async function GetUsers() {
    const response = await api.get('/users');
    setUsers(response.data.docs);

  }
  async function handleRemoveUser(id: any) {
    await api.delete(`users/${id}`);
    const deleteRepo = users.filter(user => user._id !== id);
    setUsers([...deleteRepo]);
  }

  async function handleUpdateUser() {
    await api.put(`users/${currentUser ?._id}`, { name: update })
    GetUsers();
    handleClose();
    setUpdate('');
  }
  const handleOpen = (user: User) => {
    setOpen(true);
    setCurrentUser(user);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentUser(null);
  };
  const body = (
    <div className={classes.modal}>
      <h2 id="simple-modal-title">Atualizar usuário</h2>
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
      <Header />
      <Container>
        <Cards />
        <Form onSubmit={handleAddUser}>
          <input
            value={newUser}
            onChange={e => setNewUser(e.target.value)}
            placeholder="Digite o nome para criar o usuario"
          />
          <button type="submit"  >Criar Usuário</button>
        </Form>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td className="title">{user.name}</td>
                  <td>
                    <Edit
                      type="button"
                      onClick={() => handleOpen(user)}
                      className={classes.icons}
                    >Edit</Edit>

                    <Delete
                      style={{ color: "#e83f5b", marginRight: '5' }}
                      onClick={() => handleRemoveUser(user._id)}
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
};


export default Dashboard;
