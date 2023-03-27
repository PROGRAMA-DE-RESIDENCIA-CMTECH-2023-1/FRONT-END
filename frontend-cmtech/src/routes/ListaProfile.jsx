import './Lista.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../components/Header";
import Footer from '../components/Footer';

const usuarios = [
    { id: 1, nome: 'João', cargo: 'Analista', setor: 'TI' },
    { id: 2, nome: 'Maria', cargo: 'Gerente', setor: 'Marketing' },
    { id: 3, nome: 'Pedro', cargo: 'Desenvolvedor', setor: 'TI' },
    { id: 4, nome: 'Ana', cargo: 'Analista', setor: 'Contabilidade' },
    { id: 5, nome: 'José', cargo: 'Gerente', setor: 'Vendas' },
];

const ListaProfile = () => {
    <Header title="Lista Perfis" />
    const [filtroNome, setFiltroNome] = useState('');
    const [filtroCargo, setFiltroCargo] = useState('');
    const [filtroSetor, setFiltroSetor] = useState('');

    const filtrarUsuarios = usuario => {
        if (filtroNome && !usuario.nome.toLowerCase().includes(filtroNome.toLowerCase())) {
            return false;
        }
        if (filtroCargo && !usuario.cargo.toLowerCase().includes(filtroCargo.toLowerCase())) {
            return false;
        }
        if (filtroSetor && !usuario.setor.toLowerCase().includes(filtroSetor.toLowerCase())) {
            return false;
        }
        return true;
    };

    const usuariosFiltrados = usuarios.filter(filtrarUsuarios);

    return (
        <div>
            <h1>Tabela de Perfis</h1>
            <div>
                <label htmlFor="filtroNome">Nome: </label>
                <input type="text" id="filtroNome" value={filtroNome} onChange={e => setFiltroNome(e.target.value)} />
            </div>
            <div>
                <label htmlFor="filtroCargo">Cargo: </label>
                <input type="text" id="filtroCargo" value={filtroCargo} onChange={e => setFiltroCargo(e.target.value)} />
            </div>
            <div>
                <label htmlFor="filtroSetor">Setor: </label>
                <input type="text" id="filtroSetor" value={filtroSetor} onChange={e => setFiltroSetor(e.target.value)} />
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Perfil</th>
                            <th>Departamento</th>
                            <th>Organização</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuariosFiltrados.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.nome}</td>
                                <td>{usuario.cargo}</td>
                                <td>{usuario.setor} </td>
                                <td>
                                    <div className='icones'>
                                        <EditIcon />
                                        <DeleteIcon />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};

export default ListaProfile;