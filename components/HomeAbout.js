import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { myColors } from '../assets/myColors';

export default function HomeAbout() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Haruko Shop</Text>
            <Text style={styles.content}>Haruko.vn - Kho hàng Nhật nội địa chuyên phân phối sỉ lẻ các sản phẩm mẹ và bé, sữa bột – bỉm, mỹ phẩm, thực phẩm, thời trang, đồ gia dụng, văn phòng phẩm, chăm sóc sức khỏe được sản xuất tại Nhật Bản.
</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 10,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2
    },
    title: {
        fontSize: 20,
        marginVertical: 15,
        textTransform: "uppercase",
        color: myColors.defaultPrimaryColor
    },
    content: {
        fontSize: 15
    }
})