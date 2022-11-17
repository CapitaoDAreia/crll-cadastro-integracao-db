import Cliente from "../../core/Cliente";
import ClientRepository from "../../core/RepoClient";
import firebase from "../config";

export default class ColectionClient implements ClientRepository {

    #converter = {
        toFirestore(client: Cliente){
            return {
                name: client.name,
                age: client.age
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente{
            const data = snapshot.data(options)
            return new Cliente(data.name, data.age, snapshot.id)
        }
    }

    async save(client: Cliente): Promise<Cliente | undefined> {
        if(client?.id) {
            await this.colection().doc(client.id).set(client)
            return client
        }else{
            const docRef = await this.colection().add(client)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async delete(client: Cliente): Promise<void> {
        return this.colection().doc(client.id).delete()
    }

    async getAll(): Promise<Cliente[]> {
        const query = await this.colection().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colection(){
        return firebase.firestore().collection('clientes').withConverter(this.#converter)
    }
}