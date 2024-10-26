import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (

    <Tabs
      screenOptions={{
          // Cor do cabecalho
            headerStyle: {backgroundColor: "#F60" },
          // Cor da tab bar
            tabBarStyle: {backgroundColor: "#070A52"},
          // Centraliza o titulo
            headerTitleAlign: 'center',
          // Cor do titulo
            headerTintColor: '#FFF',
          // Define a cor do menu ativo na tab bar
            tabBarActiveTintColor: "#F60",
          //Cor do icone inativo
            tabBarInactiveTintColor: '#FFF'
      }}>
          
      <Tabs.Screen name="tasks" options={{
        headerTitle: "Tarefas",
        tabBarLabel: "Tarefas",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="check-circle-outline" 
          color={ color } size={32} /> 
        )
      }}/>

      <Tabs.Screen name="user" options={{
        headerTitle: "Dados do Usuário",
        tabBarLabel: "Dados do Usuário",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" 
          color={ color } size={32} /> 
        )
      }}/>

      <Tabs.Screen name="about" options={{
        headerTitle: "Sobre o aplicativo",
        tabBarLabel: "Sobre o App",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="information-outline" 
          color={ color } size={32} /> 
        )
      }}/>

    </Tabs>
  );
}
