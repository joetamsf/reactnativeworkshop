import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';
import { useState } from 'react';

const Mission = () => {
    return (
        <Card>
        <Card.Title>
            Out Mission
        </Card.Title>
        <Card.Divider />
            <Text style={{margin: 10}}>campsites in the vast woods and backcountry of the World Wide Web Wilderness. 
                    We increase access to adventure for the public while promoting safe and respectful use of resources. 
                    The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
            </Text>
            
        </Card>
    )
}


const AboutScreen = () => {
    const [ partners, setPartners ] = useState(PARTNERS);
    return (
        <ScrollView>
            <Mission />
            <Card>
                <Card.Title>
                    Communuty Partners
                </Card.Title>
                <Card.Divider />
                    {
                        partners.map((partner) => {
                            return (
                            <ListItem key={partner.id}>
                            <Avatar source={partner.image} rounded />
                            <ListItem.Content>
                                <ListItem.Title>{partner.name}</ListItem.Title>
                                <ListItem.Subtitle>
                                    {partner.description}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>

                        )})

                    }
            </Card> 
        </ScrollView>
    )
}

export default AboutScreen;