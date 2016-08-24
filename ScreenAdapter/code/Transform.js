'use strict';
import React from 'react';
import {
    PixelRatio,
    Dimensions
} from 'react-native';

/**
 * ��UI��������ֵ(��ͼ�ϵ�pxֵ)��ת��Ϊ��ǰ�豸��Ҫ����ֵ
 * @param n
 * @returns {number}
 */
export default function p(n) {
    const WIDTH = Dimensions.get('window').width;
    return Math.round((n / 3) * (PixelRatio.getPixelSizeForLayoutSize(WIDTH) / PixelRatio.get()) / 360);
}