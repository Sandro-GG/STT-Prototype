import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, FontAwesome, AntDesign } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function StoppedRecordingScreen() {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
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

            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator
            >
                <Text style={styles.recordingText}>
                    ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად. მომხმარებელს შეუძლია ჩაწეროს საუბარი და რამდენიმე წამში მიიღოს წასაკითხი ტექსტი.ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად. მომხმარებელს შეუძლია ჩაწეროს საუბარი და რამდენიმე წამში მიიღოს წასაკითხი ტექსტი.ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად. მომხმარებელს შეუძლია ჩაწეროს საუბარი და რამდენიმე წამში მიიღოს წასაკითხი ტექსტი.ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად. მომხმარებელს შეუძლია ჩაწეროს საუბარი და რამდენიმე წამში მიიღოს წასაკითხი ტექსტი.ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად. მომხმარებელს შეუძლია ჩაწეროს საუბარი და რამდენიმე წამში მიიღოს წასაკითხი ტექსტი.ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად. მომხმარებელს შეუძლია ჩაწეროს საუბარი და რამდენიმე წამში მიიღოს წასაკითხი ტექსტი.ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად. მომხმარებელს შეუძლია ჩაწეროს საუბარი და რამდენიმე წამში მიიღოს წასაკითხი ტექსტი.ტრანსკრიფციის სერვისი ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად. მომხმარებელს შეუძლია ჩაწეროს საუბარი და რამდენიმე წამში მიიღოს წასაკითხი ტექსტი.ტექნოლოგიები ყოველდღიურად იცვლება და ჩვენც მათთან ერთად ვვითარდებით. ზოგჯერ ერთი პატარა იდეაც კი შეიძლება გადაიქცესქსტად
                </Text>

                <View style={styles.playerRow}>
                    <View style={styles.playButton}>
                        <AntDesign name="caret-right" size={22} color={colors.white} />
                    </View>

                    <View style={styles.playerMeta}>
                        <View style={styles.sliderTrack}>
                            <View style={styles.sliderProgress} />
                            <View style={styles.sliderThumb} />
                        </View>
                        <Text style={styles.timeText}>00:00</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={[styles.bottomBar, { bottom: insets.bottom + 10 }]}>
                <View style={styles.bottomItem}>
                    <Feather name="file-text" size={30} color={colors.icon} />
                    <Text style={styles.bottomLabel}>აუდიო ფაილი</Text>
                </View>

                <View style={styles.centerMicWrap}>
                    <View style={styles.centerMicButton}>
                        <Feather name="mic" size={34} color={colors.white} />
                    </View>
                    <Text style={styles.bottomLabel}>ჩაწერა</Text>
                </View>

                <View style={styles.bottomItem}>
                    <FontAwesome name="youtube-play" size={38} color="#FF0000" />
                    <Text style={styles.bottomLabel}>YouTube Link</Text>
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
    content: {
        flex: 1,
        marginTop: 16,
        paddingHorizontal: 20,
        marginBottom: 150,
    },
    contentContainer: {
        paddingBottom: 30,
    },
    recordingText: {
        fontFamily: 'BPG-Nino',
        fontSize: 12,
        lineHeight: 18,
        color: '#2B2B2B',
    },
    playerRow: {
        marginTop: 80,
        flexDirection: 'row',
        alignItems: 'center',
    },
    playButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    playerMeta: {
        flex: 1,
        justifyContent: 'center',
    },
    sliderTrack: {
        height: 6,
        borderRadius: 999,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        position: 'relative',
    },
    sliderProgress: {
        width: '10%',
        height: 6,
        borderRadius: 999,
        backgroundColor: colors.primary,
    },
    sliderThumb: {
        position: 'absolute',
        left: '10%',
        marginLeft: -8,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: colors.primary,
    },
    timeText: {
        marginTop: 6,
        fontSize: 12,
        color: colors.text,
        fontFamily: 'BPG-Nino',
    },
    bottomBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    bottomItem: {
        alignItems: 'center',
        width: 92,
        marginBottom: 14,
    },
    centerMicWrap: {
        alignItems: 'center',
        width: 110,
    },
    centerMicButton: {
        width: 88,
        height: 88,
        borderRadius: 20,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
    },
    bottomLabel: {
        marginTop: 6,
        fontSize: 12,
        color: colors.muted,
        textAlign: 'center',
        fontFamily: 'BPG-Nino',
    },
});