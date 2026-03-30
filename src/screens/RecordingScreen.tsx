import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function RecordingScreen() {
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
      </ScrollView>

      <View style={[styles.bottomBar, { bottom: insets.bottom + 8 }]}>
        <View style={styles.bottomItem}>
          <Feather name="file-text" size={30} color={colors.icon} />
          <Text style={styles.bottomLabel}>აუდიო ფაილი</Text>
        </View>

        <View style={styles.centerMicWrap}>
          <View style={styles.stopButton}>
            <Feather name="square" size={26} color={colors.white} />
          </View>
          <Text style={styles.bottomLabel}>შეჩერება</Text>
        </View>

        <View style={styles.bottomItem}>
          <FontAwesome name="youtube-play" size={38} color="red" />
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
  },
  contentContainer: {
    paddingBottom: 170,
  },
  recordingText: {
  fontFamily: 'BPG-Nino',
  fontSize: 14,
  lineHeight: 21,
  letterSpacing: 0,
  color: '#2B2B2B',
},
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
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
  stopButton: {
    width: 88,
    height: 88,
    borderRadius: 20,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  bottomLabel: {
    marginTop: 6,
    fontSize: 14,
    color: colors.muted,
    textAlign: 'center',
  },
});