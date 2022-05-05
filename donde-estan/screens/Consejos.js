
import { View, Text } from 'native-base';
import { List } from 'react-native-paper';
import React from 'react';
import { useState } from 'react/cjs/react.production.min';

export default function Consejos() {

    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);
    return (
        <View>

        </View>
    );
}
