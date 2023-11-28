import React from 'react'
import {SafeAreaView, View} from 'react-native'
import {QuillTextEditor} from './Components'

export default () => {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#0068C5'}}> 
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f1f1', paddingHorizontal: 22}}>
                <QuillTextEditor />
            </View>
        </SafeAreaView> 
    )
}