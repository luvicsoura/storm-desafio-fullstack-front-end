import DateRangeIcon from '@material-ui/icons/DateRange'
import HdrStrongIcon from '@material-ui/icons/HdrStrong'

export const FILTERS_HELP_TEXT = 'Utilize os filtros abaixo para refinar os resultados da tabela, clique no botão APLICAR para salvar as alterações.'
export const FILTERS = [
    {
        title: 'Todas as datas de inclusão',
        type: 'date',
        icon: DateRangeIcon
    },
    {
        title: 'Todas as datas de alteração',
        type: 'date',
        icon: DateRangeIcon
    },
    {
        title: 'Ativos e inativos',
        type: 'list',
        icon: HdrStrongIcon
    }
]
export const DASHBOARD_HEADERS = [
    {
        label: 'Usuário'
    },
    {
        label: 'Email'
    },
    {
        label: 'Data de inclusão',
        style: {
            textAlign: 'center'
        }
    },
    {
        label: 'Data de alteração',
        style: {
            textAlign: 'center'
        }
    },
    {
        label: 'Regras',
        style: {
            textAlign: 'center'
        }
    },
    {
        label: 'Status',
        style: {
            textAlign: 'center'
        }
    }
]