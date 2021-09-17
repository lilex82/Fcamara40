// Lila 0916 instruções de acordo com o estado atual da pagina.
export function getInstructionFromCurrentState(currentState) {
    if (!currentState.office.id) {
        return { title: 'Olá!', instruction: 'Selecione o escritório para seu agendamento' }
    }

    if (!currentState.date) {
        return {title: 'Vamos lá...', instruction: 'Agora, selecione a data para  seu agendamento'}
    }
    return {
        title: 'Tá quase...',
        instruction: 'Selecione o horário para seu agendamento'
    }
}