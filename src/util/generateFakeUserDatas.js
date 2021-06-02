import faker from 'faker'
import moment from 'moment'

export const generateFakeUserDatas = (_limit) =>{
    let result = []
    for(let i = 0;i < (_limit || 5); i++){
        result.push({
            name: faker.name.findName(),
            timestamp: moment(faker.datatype.datetime()).format('DD/MM/YYYY-HH:mm:ss')
        })
    }
    return result
}

export default {
    generateFakeUserDatas
}
