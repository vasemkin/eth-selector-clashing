use ethers::utils::id;
use ethers::utils::hex::ToHex;
use clap::{App, Arg};
use rand::{distributions::Alphanumeric, Rng};

fn combine_with_random_string(prefix: &str, postfix: &str) -> String {
    let random_string: String = rand::thread_rng()
        .sample_iter(&Alphanumeric)
        .take(4)
        .map(char::from)
        .collect();

    format!("{}{}{}", prefix, random_string, postfix)
}

fn compare_first_n_chars(s1: &str, s2: &str, n: usize) -> bool {
    s1.chars().take(n).eq(s2.chars().take(n))
}

fn main() {
    let matches = App::new("eth clashing selector tool")
        .version("1.0")
        .author("semkin.eth")
        .about("finds a function declaration with a clashing selector to a target function")
        .arg(
            Arg::new("func_name")
                .long("func_name")
                .takes_value(true),
        )
        .arg(
            Arg::new("params")
                .long("params")
                .takes_value(true),
        )
        .get_matches();

    let func_name = matches.value_of("func_name").unwrap_or_default();
    let params = matches.value_of("params").unwrap_or_default();

    let target_signature = format!("{}{}", func_name, params);
    let target_selector = id(&target_signature);

    println!("target signature: {:?}", target_signature);
    println!("target selector: 0x{}", target_selector.encode_hex::<String>());

    println!("searching...");

    loop {
        let random_signature = combine_with_random_string("func_", params);
        let random_selector = id(&random_signature);

        let str1 = random_selector.encode_hex::<String>();
        let str2 = target_selector.encode_hex::<String>();

        if compare_first_n_chars(&str1, &str2, 8) {
            println!("clashing selector found!");
            println!("found signature: {:?}", random_signature);
            println!("found selector: 0x{}", random_selector.encode_hex::<String>());

            break
        }

    }

}
