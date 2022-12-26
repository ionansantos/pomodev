import { StatusBar } from "expo-status-bar";
import  { useNavigation } from "@react-navigation/native"
import { Container, Banner, Text } from "./style";
import { Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";

export default function Welcome() {


    const navigation = useNavigation();

    const pageTime = () =>   {
        navigation.navigate('Timer');
    }

    return (
        <Container>
            <StatusBar style="auto" />
            <Text>Focused, motivated.</Text>
            <Banner loop autoPlay autoSize source={require("../../../assets/banner.json")} />
            <Button onPress={pageTime}>
                <Entypo name="chevron-right" size={24} color="white" />
            </Button>
        </Container>
    )
}