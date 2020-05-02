import ReactGA from 'react-ga'

export const topClickTrack = () => {
    ReactGA.event({
        category: 'top',
        action: 'click',
        label: `Voltar ao topo`
    })
}
