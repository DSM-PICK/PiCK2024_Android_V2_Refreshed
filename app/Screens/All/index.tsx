import { Header, LabelLayout, Layout, Profile } from "@/Components";
import { Item } from "./Item";
export * from "./Screens";

export const All = ({ navigation }) => {
  return (
    <Layout Header={<Header />} scrollAble>
      <Profile />
      <LabelLayout label="기타 기능">
        <Item icon="Smile" onPress={() => {}}>
          자습 감독 선생님 확인
        </Item>
        <Item icon="Notice" onPress={() => navigation.navigate("공지사항")}>
          공지사항
        </Item>
        <Item icon="Bug" onPress={() => {}}>
          버그 제보
        </Item>
      </LabelLayout>
      <LabelLayout label="기타 기능">
        <Item icon="Custom" onPress={() => navigation.navigate("커스텀")}>
          커스텀
        </Item>
        <Item icon="Bell" onPress={() => {}}>
          알림 설정
        </Item>
      </LabelLayout>
      <LabelLayout label="기타 기능">
        <Item icon="Person" onPress={() => navigation.navigate("마이페이지")}>
          마이 페이지
        </Item>
        <Item icon="Exit" onPress={() => {}}>
          로그아웃
        </Item>
      </LabelLayout>
    </Layout>
  );
};