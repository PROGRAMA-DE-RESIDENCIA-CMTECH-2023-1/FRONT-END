import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import SendIcon from "@mui/icons-material/Send";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Copyright from "../components/Copyright";
import * as signalR from "@microsoft/signalr"


/* Página Chat */

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      align: "right",
      message: "Hello...",
      time: new Date().toLocaleTimeString()
    }
  ]);
  const [text, setText] = useState('');
  const [connection, setConnection] = useState(null);

  const updateChat = (message) => {
    setMessages(prev => [
      ...prev,
      {
        id: Math.floor(Math.random() * 10),
        align: messages?.length % 2 === 0 ? "right" : "left",
        message: message,
        time: new Date().toLocaleTimeString()
      }
    ])
  }

  const handleSendMessage = () => {
    if (text) {
      sendMessage("a", text, 6)
      updateChat(text)
      setText('')
    } else {
      alert('Preencha a mensagem para enviar');
    }
  }

  const sendMessage = async (user, message, recieverId) => {
    const chatMessage = {
      user: user,
      message: message,
      recieverId: recieverId
    }
    try {
      await connection.send('SendMessage', chatMessage)
      console.log(chatMessage)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7275/chat', {
        withCredentials: true,
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build()
      
    setConnection(newConnection)

  }, [])

  useEffect(() => {
    if (connection) {
      connection.start().then(result => {
        connection.on("RecieveMessage", message => {
          updateChat(message.message)
        })
      })
    }
  }, [connection])

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: theme =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Box>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h5" className="header-message">
                      Chat
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  component={Paper}
                  style={{
                    width: "100%",
                    height: "80vh"
                  }}
                >
                  <Grid
                    item
                    xs={3}
                    style={{ borderRight: "1px solid #e0e0e0" }}
                  >
                    <Grid item xs={12} style={{ padding: "10px" }}>
                      <TextField
                        id="outlined-basic-email"
                        label="Pesquisar"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Divider />
                    <List>
                      <ListItem button key="User1">
                        <ListItemIcon>
                          <Avatar
                            alt="User 1"
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                          />
                        </ListItemIcon>
                        <ListItemText primary="Lucas Brito"></ListItemText>
                      </ListItem>
                    </List>
                    <Divider />
                    <List>
                      <ListItem button key="User2">
                        <ListItemIcon>
                          <Avatar
                            alt="User 2"
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                          />
                        </ListItemIcon>
                        <ListItemText primary="Matheus Cunha">
                          User 2
                        </ListItemText>
                        <RadioButtonCheckedIcon style={{ color: '#00a000' }} />
                        <ListItemText
                          secondary="online"
                          align="right"
                        ></ListItemText>
                      </ListItem>
                      <ListItem button key="User3">
                        <ListItemIcon>
                          <Avatar
                            alt="User 3"
                            src="https://material-ui.com/static/images/avatar/3.jpg"
                          />
                        </ListItemIcon>
                        <ListItemText primary="Larissa Alcantâra">User 3</ListItemText>
                      </ListItem>
                      <ListItem button key="User4">
                        <ListItemIcon>
                          <Avatar
                            alt="User 4"
                            src="https://material-ui.com/static/images/avatar/2.jpg"
                          />
                        </ListItemIcon>
                        <ListItemText primary="Alex Silva">
                          User 4
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={9}>
                    <List style={{ height: "70vh", overflowY: "auto" }}>
                      {messages?.length > 0 ? (
                        <>
                          {messages.map((item, key) => (
                            <ListItem key={key}>
                              <Grid container>
                                <Grid item xs={12}>
                                  <ListItemText
                                    align={item.align}
                                    primary={item.message}
                                  ></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                  <ListItemText
                                    align={item.align}
                                    secondary={item.time}
                                  ></ListItemText>
                                </Grid>
                              </Grid>
                            </ListItem>
                          ))}
                        </>
                      ) : ('Nenhum mensagem enviada')}
                    </List>
                    <Divider />
                    <Grid container style={{ padding: "20px" }}>
                      <Grid item xs={11}>
                        <TextField
                          id="outlined-basic-email"
                          label="Digite uma mensagem"
                          fullWidth
                          name="text"
                          value={text}
                          onChange={e => setText(e.target.value)}
                          onKeyUp={(event) => {
                            if (event.key === 'Enter') {
                              handleSendMessage()
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={1} align="right">
                        <Fab color="primary" aria-label="add" onClick={handleSendMessage} style={{ background: '#172070' }}>
                          <SendIcon />
                        </Fab>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}