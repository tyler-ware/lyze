const {ipcRenderer} = window.require('electron')

const readFile = (fileName) => {
  return ipcRenderer.sendSync('read-file', fileName) 
};


export default {
  readFile
}
