import { existsSync } from "fs"
import { opendir } from "fs/promises"
import { join } from "path"

/**
 * Recursivly yields files from a child directory tree
 * @param path Starting directory path
 */
export async function* dirFilesGenerator(path: string): AsyncGenerator<string, void, void> {
    if (!existsSync(path)) {
        return
    }
    const dirIterator = await opendir(path)
    for await (const dirent of dirIterator) {
        if (dirent.isDirectory()) {
            yield* dirFilesGenerator(join(path, dirent.name))
        } else {
            yield join(path, dirent.name)
        }
    }
}