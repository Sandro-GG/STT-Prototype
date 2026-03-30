import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const sections = ['დღეს', 'გუშინ', '11 მარტი', 'დღეს', 'გუშინ'];

const items = new Array(2).fill(
  'ტრანსკრიფციის სერვისის ხმას ტექსტად გარდაქმნის სწრაფად და მარტივად. მომხმარებელს შუძლ...'
);

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.headerWrap}>
        <View style={styles.topBar}>
          <Feather name="chevron-left" size={32} color="#111111" />

          <View style={styles.profileBlock}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>A</Text>
            </View>

            <View style={styles.userInfo}>
              <Text style={styles.email}>user@gmail.com</Text>

              <View style={styles.badge}>
                <Text style={styles.badgeText}>პრემიუმი</Text>
                <Text style={styles.badgeStar}>⭐</Text>
              </View>
            </View>
          </View>

          <View style={styles.langBlock}>
            <Text style={styles.flag}>🇬🇪</Text>
            <Feather name="chevron-down" size={22} color="#111111" />
          </View>
        </View>

        <View style={styles.divider} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator
      >
        {sections.map((section, index) => (
          <View key={`${section}-${index}`} style={styles.section}>
            <Text style={styles.sectionTitle}>{section}</Text>

            {items.map((item, itemIndex) => (
              <View key={`${section}-${itemIndex}`} style={styles.card}>
                <View style={styles.cardRow}>
                  <Feather
                    name="edit-2"
                    size={30}
                    color="#3797F0"
                    style={styles.editIcon}
                  />

                  <Text style={styles.cardText}>{item}</Text>

                  <Feather
                    name="trash-2"
                    size={30}
                    color="#111111"
                    style={styles.trashIcon}
                  />
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerWrap: {
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 14,
  },
  profileBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 14,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#D9DB67',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    color: '#111111',
    fontFamily: 'BPG-Nino',
  },
  userInfo: {
    justifyContent: 'center',
  },
  email: {
    fontSize: 14,
    color: '#111111',
    marginBottom: 6,
    fontWeight: '600',
  },
  badge: {
    height: 24,
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: '#61C9B9',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 11,
    color: '#111111',
    fontFamily: 'BPG-Nino',
    marginRight: 4,
  },
  badgeStar: {
    fontSize: 10,
  },
  langBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  flag: {
    fontSize: 28,
    marginRight: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#E6E6E6',
  },
  content: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 28,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#9D9D9D',
    fontFamily: 'BPG-Nino',
    marginBottom: 10,
  },
  card: {
    borderWidth: 2,
    borderColor: '#3797F0',
    borderRadius: 18,
    backgroundColor: '#F3F3F3',
    marginBottom: 14,
    minHeight: 112,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  editIcon: {
    marginTop: 6,
    marginRight: 14,
  },
  cardText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#111111',
    fontFamily: 'BPG-Nino',
    fontWeight: '700',
    paddingRight: 14,
  },
  trashIcon: {
    marginTop: 4,
    marginLeft: 8,
  },
});