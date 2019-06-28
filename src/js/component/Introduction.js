import React from 'react';
import { Typography, Box } from '@material-ui/core';

export default function Introduction() {
    return (
        <Typography component="div" align='justify' >
            <Box lineHeight={2}>
                您好：
                </Box>
            <Box lineHeight={2} >
                我們是中央大學客家學院客家社會系的學生，
                在這個暑假中正在進行一個關於客家文化推廣與閱聽
                眾認知的市場調查計畫，下面這是一份簡單的涉入度
                調查表，希望您可以協助我們做此次相關客家文化議
                題受訪者的前置作業的調查作業。這個調查很簡單，
                只要花費您約5分鐘，針對我們問題的面向，勾選您的
                意向即可。每個面向共有7格尺度，請依每個面向勾選
                您覺得較接近的向度。
                </Box>
        </Typography>
    )
}