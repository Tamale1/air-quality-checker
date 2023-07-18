

const PollutantInfo = ({pollutant}) => {
    const getPollutantInfo = (pollutant) => {
switch (pollutant) {

    case 'pm25':
    return 'pm25. These are tiny particals in the air that reduce visibility and cause the air to appear hazy when the levels are elevated. they can be a result of burning fosil fuel and chemical reaction. It is also produced by common indoor activities. Some indoor sources of fine particles are tobacco smoke, cooking (e.g., frying, sautéing, and broiling), burning candles or oil lamps, and operating fireplaces and fuel-burning space heaters (e.g., kerosene heaters'
    break;
   
    case 'pm10':
    return 'pm10. These are inhallble particals that a small enough to penetrate the thoracic region of the respiratory system. They can originate from dust stirred by vehicles on the road,wood burning or other industrial activities'
    break;
    
    case 'o3':
    return 'Ozone is a gas that occurs both naturally in the Earth\'s upper atmosphere (stratospheric ozone) and at ground level (tropospheric ozone). While stratospheric ozone plays a crucial role in protecting us from the sun\'s harmful ultraviolet rays, tropospheric ozone is a pollutant and a major component of smog. It is formed through the reaction of nitrogen oxides and volatile organic compounds in the presence of sunlight. Breathing in high levels of ozone can cause respiratory issues, particularly for people with pre-existing respiratory conditions.'
    break;
   
   
    case 'VOCs':
        return 'Volatile organic compounds are a group of chemicals that easily evaporate at room temperature. They are released from a wide range of sources, including paints, solvents, cleaning agents, and industrial processes. VOCs contribute to the formation of ground-level ozone and can have adverse effects on human health, such as eye, nose, and throat irritation, respiratory issues, and in some cases, they can be carcinogenic.'
        break;
       
        case 'Mercury (Hg)':
            return 'Mercury is a naturally occurring heavy metal that can be released into the environment through industrial processes, particularly coal-fired power plants and waste incineration. It can travel long distances through the atmosphere and contaminate water bodies, leading to the bioaccumulation of methylmercury in fish and other aquatic organisms. Methylmercury is highly toxic and can cause neurological damage in humans, particularly affecting the developing nervous system of infants and children.'
            break;
           
           
            case ' Lead (Pb)':
           return 'Lead is a heavy metal that can be released into the environment through industrial activities, such as mining, smelting, and burning fossil fuels. It is a toxic substance that can accumulate in the body over time, particularly affecting the nervous system. Exposure to lead can cause developmental delays in children, damage to the brain and kidneys, and other serious health problems.'
           break
           
           case 'Sulfur Dioxide (SO2)':
           return 'Sulfur dioxide is a gas produced from the combustion of fossil fuels, particularly those containing sulfur compounds. It is a major contributor to air pollution, particularly in areas with industrial activity. Sulfur dioxide can cause respiratory problems, especially for people with asthma or other pre-existing respiratory conditions. It also contributes to the formation of acid rain.'
           break
           
           case 'Carbon Monoxide (CO)':
           return 'Sulfur dioxide is a gas produced from the combustion of fossil fuels, particularly those containing sulfur compounds. It is a major contributor to air pollution, particularly in areas with industrial activity. Sulfur dioxide can cause respiratory problems, especially for people with asthma or other pre-existing respiratory conditions. It also contributes to the formation of acid rain.'
           break
           
           
           case 'Carbon Monoxide (CO)':
           return 'Carbon monoxide is a colorless and odorless gas emitted from the incomplete combustion of fossil fuels. It is highly toxic and can be harmful to humans and animals when inhaled in high concentrations. Exposure to carbon monoxide can lead to symptoms such as headache, dizziness, nausea, and in severe cases, it can be fatal.'
           
           case 'Nitrogen Dioxide (NO2)':
            return 'Nitrogen dioxide is a reddish-brown gas that forms as a result of combustion processes, particularly in vehicles and power plants. It contributes to the formation of smog and can irritate the respiratory system. Prolonged exposure to high levels of nitrogen dioxide can increase the risk of respiratory infections and respiratory diseases such as asthma.'


default:
    return 'Pollutant under research'
    break;
}
}
return(
    <div className="card mb-4">
        <div className="card-body">
        <h4 className="card-title">{pollutant.toUpperCase()} Information</h4>
        <p>{getPollutantInfo(pollutant)}</p>
        

        </div>


    </div>
    )
}
export default PollutantInfo