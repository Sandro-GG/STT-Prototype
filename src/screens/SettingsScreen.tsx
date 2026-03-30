import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const variant: 'base' | 'language' | 'speaker' | 'engine' | 'source' = 'base';

export default function SettingsScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>ხმა ⇄ ტექსტი</Text>
                    <Feather name="menu" size={34} color={colors.text} />
                </View>

                <View style={styles.divider} />

                <View style={styles.actionsRow}>
                    <View style={styles.primaryButton}>
                        <Feather name="plus" size={18} color={colors.white} />
                        <Text style={styles.primaryButtonText}>ახლის გახსნა</Text>
                    </View>

                    <View style={styles.outlineButton}>
                        <Feather name="settings" size={17} color={colors.primary} />
                        <Text style={styles.outlineButtonText}>პარამეტრები</Text>
                    </View>
                </View>

                <View style={styles.inputRow}>
                    <Feather name="mic" size={28} color={colors.primary} />
                    <Text style={styles.placeholderText}>დაიწყე ჩაწერა...</Text>
                </View>
            </View>

            <View style={styles.overlay} />

            <View style={styles.sheet}>
                <View style={styles.sheetHandle} />

                {variant === 'base' && (
                    <>
                        <View style={styles.selectBox}>
                            <Text style={styles.selectText}>ქართული</Text>
                            <Feather name="chevron-down" size={22} color={colors.text} />
                        </View>

                        <View style={styles.selectBox}>
                            <Text style={styles.selectText}>მოსაუბრის გამოყოფა</Text>
                            <Feather name="chevron-down" size={22} color={colors.text} />
                        </View>

                        <View style={styles.selectBox}>
                            <Text style={styles.selectText}>STT1</Text>
                            <Feather name="chevron-down" size={22} color={colors.text} />
                        </View>

                        <View style={styles.selectBox}>
                            <Text style={[styles.selectText, styles.placeholderSelect]}>მიკროფონი</Text>
                            <Feather name="chevron-down" size={22} color={colors.text} />
                        </View>

                        <View style={styles.radioRow}>
                            <View style={styles.radioItem}>
                                <View style={styles.radioSelectedOuter}>
                                    <View style={styles.radioSelectedInner} />
                                </View>
                                <Text style={styles.radioLabel}>პუნქტუაცია</Text>
                            </View>

                            <View style={styles.radioItem}>
                                <View style={styles.radioOuter} />
                                <Text style={styles.radioLabel}>აქტივორები</Text>
                            </View>
                        </View>
                    </>
                )}

                {variant === 'language' && (
                    <>
                        <View style={[styles.selectBox, styles.activeSelect]}>
                            <Text style={styles.selectText}>ქართული</Text>
                            <Feather name="chevron-up" size={22} color={colors.text} />
                        </View>

                        <View style={styles.searchBox}>
                            <Feather name="search" size={20} color="#A8A8A8" />
                            <Text style={styles.searchText}>ძებნა</Text>
                        </View>

                        <View style={styles.listBox}>
                            {[
                                'ფრანგული',
                                'იაპონური',
                                'ქართული',
                                'ინგლისური',
                                'არაბული',
                                'ნიდერლანდური',
                                'ბერძნული',
                                'შვედური',
                            ].map((item) => (
                                <Text key={item} style={styles.listText}>
                                    {item}
                                </Text>
                            ))}

                            <View style={styles.fakeScrollTrack}>
                                <View style={styles.fakeScrollThumb} />
                            </View>
                        </View>
                    </>
                )}

                {variant === 'speaker' && (
                    <>
                        <View style={styles.selectBox}>
                            <Text style={styles.selectText}>ქართული</Text>
                            <Feather name="chevron-down" size={22} color={colors.text} />
                        </View>

                        <View style={[styles.selectBox, styles.activeSelect, styles.doubleRowTop]}>
                            <Text style={styles.selectText}>მოსაუბრის გამოყოფა</Text>
                            <Feather name="chevron-up" size={22} color={colors.primary} />
                        </View>
                        <View style={styles.dropdownOption}>
                            <Text style={styles.dropdownOptionText}>მოსაუბრის არ გამოყოფა</Text>
                        </View>

                        <View style={styles.selectBox}>
                            <Text style={[styles.selectText, styles.placeholderSelect]}>მიკროფონი</Text>
                            <Feather name="chevron-down" size={22} color={colors.text} />
                        </View>

                        <View style={styles.radioRow}>
                            <View style={styles.radioItem}>
                                <View style={styles.radioSelectedOuter}>
                                    <View style={styles.radioSelectedInner} />
                                </View>
                                <Text style={styles.radioLabel}>პუნქტუაცია</Text>
                            </View>

                            <View style={styles.radioItem}>
                                <View style={styles.radioOuter} />
                                <Text style={styles.radioLabel}>აქტივორები</Text>
                            </View>
                        </View>
                    </>
                )}

                {variant === 'engine' && (
                    <>
                        <View style={styles.selectBox}>
                            <Text style={styles.selectText}>ქართული</Text>
                            <Feather name="chevron-down" size={22} color={colors.text} />
                        </View>

                        <View style={styles.selectBox}>
                            <Text style={styles.selectText}>მოსაუბრის გამოყოფა</Text>
                            <Feather name="chevron-down" size={22} color={colors.text} />
                        </View>

                        <View style={[styles.selectBox, styles.activeSelect, styles.doubleRowTop]}>
                            <Text style={styles.selectText}>STT1</Text>
                            <Feather name="chevron-up" size={22} color={colors.primary} />
                        </View>
                        <View style={styles.engineList}>
                            {['STT1', 'STT2', 'STT3'].map((item, index) => (
                                <View
                                    key={item}
                                    style={[
                                        styles.engineItem,
                                        index !== 2 && styles.engineItemBorder,
                                    ]}
                                >
                                    <Text style={styles.engineItemText}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </>
                )}

                {variant === 'source' && (
                    <>
                        <View style={styles.selectBox}>
                            <Text style={styles.selectText}>ქართული</Text>
                            <Feather name="chevron-down" size={22} color={colors.text} />
                        </View>

                        <View style={styles.selectBox}>
                            <Text style={styles.selectText}>მოსაუბრის გამოყოფა</Text>
                            <Feather name="chevron-down" size={22} color={colors.text} />
                        </View>

                        <View style={styles.selectBox}>
                            <Text style={styles.selectText}>STT1</Text>
                            <Feather name="chevron-down" size={22} color={colors.text} />
                        </View>

                        <View style={[styles.selectBox, styles.activeSelect, styles.doubleRowTop]}>
                            <Text style={[styles.selectText, styles.placeholderSelect]}>მიკროფონი</Text>
                            <Feather name="chevron-up" size={22} color={colors.primary} />
                        </View>
                        <View style={styles.dropdownOption}>
                            <Text style={styles.dropdownOptionText}>სისტემის ხმა</Text>
                        </View>
                    </>
                )}

                <View style={styles.buttonsRow}>
                    <View style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>გაუქმება</Text>
                    </View>

                    <View style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>დამახსოვრება</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    page: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.text,
    },
    divider: {
        height: 1,
        backgroundColor: '#E5E5E5',
    },
    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 8,
    },
    primaryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        paddingHorizontal: 14,
        paddingVertical: 9,
        borderRadius: 10,
        height: 42,
    },
    primaryButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
    outlineButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.2,
        borderColor: colors.primary,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 10,
        height: 42,
    },
    outlineButtonText: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 28,
    },
    placeholderText: {
        fontSize: 16,
        color: colors.muted,
        marginLeft: 12,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.28)',
    },
    sheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
        paddingHorizontal: 24,
        paddingTop: 26,
        paddingBottom: 24,
    },
    sheetHandle: {
        width: 56,
        height: 5,
        borderRadius: 999,
        backgroundColor: 'transparent',
        alignSelf: 'center',
        marginBottom: 8,
    },
    selectBox: {
        minHeight: 68,
        borderWidth: 1,
        borderColor: '#4E4E4E',
        borderRadius: 12,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
    },
    activeSelect: {
        borderColor: colors.primary,
    },
    selectText: {
        fontSize: 18,
        color: '#4A4A4A',
        fontFamily: 'BPG-Nino',
    },
    placeholderSelect: {
        color: '#7B7B7B',
    },
    searchBox: {
        height: 60,
        borderWidth: 1,
        borderColor: '#C7C7C7',
        borderRadius: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    searchText: {
        fontSize: 18,
        color: '#B0B0B0',
        marginLeft: 12,
        fontFamily: 'BPG-Nino',
    },
    listBox: {
        height: 320,
        borderWidth: 1,
        borderColor: '#4E4E4E',
        borderRadius: 12,
        paddingTop: 18,
        paddingHorizontal: 20,
        marginBottom: 10,
        position: 'relative',
    },
    listText: {
        fontSize: 18,
        color: '#111111',
        marginBottom: 20,
        fontFamily: 'BPG-Nino',
    },
    fakeScrollTrack: {
        position: 'absolute',
        right: 10,
        top: 16,
        bottom: 16,
        width: 8,
        borderRadius: 999,
        backgroundColor: '#D9D9D9',
    },
    fakeScrollThumb: {
        width: 8,
        height: 44,
        borderRadius: 999,
        backgroundColor: colors.primary,
    },
    doubleRowTop: {
        marginBottom: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    dropdownOption: {
        minHeight: 70,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#4E4E4E',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingHorizontal: 18,
        justifyContent: 'center',
        marginBottom: 18,
        backgroundColor: '#FFFFFF',
    },
    dropdownOptionText: {
        fontSize: 18,
        color: '#4A4A4A',
        fontFamily: 'BPG-Nino',
    },
    engineList: {
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#4E4E4E',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        marginBottom: 18,
        overflow: 'hidden',
    },
    engineItem: {
        height: 70,
        paddingHorizontal: 18,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    engineItemBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#4E4E4E',
    },
    engineItemText: {
        fontSize: 18,
        color: '#4A4A4A',
    },
    radioRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 28,
        paddingHorizontal: 8,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioSelectedOuter: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 3,
        borderColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        backgroundColor: 'transparent',
    },
    radioSelectedInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.primary,
    },
    radioOuter: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#D9D9D9',
        marginRight: 12,
    },
    radioLabel: {
        fontSize: 16,
        color: '#111111',
        fontFamily: 'BPG-Nino',
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 18,
    },
    cancelButton: {
        flex: 1,
        height: 64,
        borderRadius: 14,
        backgroundColor: '#D8ECFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        fontSize: 20,
        color: colors.primary,
        fontWeight: '600',
        fontFamily: 'BPG-Nino',
    },
    saveButton: {
        flex: 1,
        height: 64,
        borderRadius: 14,
        backgroundColor: '#2F86D6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveButtonText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '600',
        fontFamily: 'BPG-Nino',
    },
});