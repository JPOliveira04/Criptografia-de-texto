function criptTexto() {
    const textoOriginal = document.getElementById('textoOriginal').value;
    let textoModificado = textoOriginal;
    textoModificado = textoModificado.replace(/a/gi, 'Acam');
    textoModificado = textoModificado.replace(/e/gi, 'Epe');
    textoModificado = textoModificado.replace(/i/gi, 'ipil');
    textoModificado = textoModificado.replace(/o/gi, 'opoz');
    textoModificado = textoModificado.replace(/u/gi, 'urusu');
    document.getElementById('textoModificado').value = textoModificado;
    document.getElementById('textoOriginal').value = '';
}

function descriptTexto() {
    const textoModificado = document.getElementById('textoModificado').value;
    let textoOriginal = textoModificado;
    textoOriginal = textoOriginal.replace(/Acam/gi, 'a');
    textoOriginal = textoOriginal.replace(/Epe/gi, 'e');
    textoOriginal = textoOriginal.replace(/ipil/gi, 'i');
    textoOriginal = textoOriginal.replace(/opoz/gi, 'o');
    textoOriginal = textoOriginal.replace(/urusu/gi, 'u');
    document.getElementById('textoOriginal').value = textoOriginal;
}

function copiarTexto() {
    const textoModificado = document.getElementById('textoModificado');
    textoModificado.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}
